import React, { useEffect, useState } from 'react';
import { View, Text, SectionList, SectionListData, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Input } from '../../../components/_shared';
import SongGroupModal from '../../../components/songs/SongGroupModal/SongGroupModal';

import { useItunesApi } from '../../../hooks/song-hooks';
import { actionSetSongList } from '../../../store/actions/songs-actions';

import styles from './SongListScreen.styles';
import { ApplicationState } from '../../../store/store';
import { SongState } from '../../../store/reducers/songs-reducer';
import { SONG_SECTIONS } from '../../../constants/songs';
import { Song, SongList } from '../../../types/songs';
import { colors } from '../../../theme/colors';

interface Props {}

const SongListScreen: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>('');
  const { songList, sectionBy } = useSelector<ApplicationState, SongState>((state) => state.songs);
  const { data, loading } = useItunesApi(search);

  const dispatch = useDispatch();

  useEffect(() => {
    sortList();
  }, [data, sectionBy]);

  const sortList = async () => {
    const results = data;
    // transform data to sections [{ title: '', data: [] }] to use for populating section list
    const songSection = results.reduce((obj: any, item: Song) => {
      // @ts-ignore
      const title = item[sectionBy] || 'Unspecified'; // sets to unspecified if no value for collectionName/releaseData
      // checks if title already exist in collection.
      const searchTitle = obj.find((element: SongList) => element.title === title);

      // if not existing, push a new data and title
      if (!searchTitle) {
        obj.push({ title, data: [item] });
      } else {
        // else, just update the search data array
        searchTitle.data.push(item);
      }
      return obj;
    }, []);

    dispatch(actionSetSongList(songSection));
  };

  const renderSectionTitle = ({ section: { title, trackId } }: SectionListData<string, any>) => {
    let sectionTitle = title;

    if (sectionBy === SONG_SECTIONS.RELEASED_DATE) {
      const date = new Date(title)
      sectionTitle = moment(date).format('MMMM DD, YYYY') || 'Unspecified Release Date';
    }
    return (
      <View style={[styles.sectionTitleView, styles.container]} key={trackId}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      </View>
    );
  };

  const renderList = ({ item }: any) => {
    return (
      <View style={[styles.section, styles.container]} key={item.trackId}>
        <Text style={styles.songTitle}>{item.trackName || 'Unknown Track Name'}</Text>
        <Text>{item.artistName}</Text>
      </View>
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.container}>
        <Text>No records found</Text>
      </View>
    );
  };

  const renderSectionList = () => {
    if (loading) {
      return (
        <View style={styles.loaderView}>
          <ActivityIndicator size="large" color={colors.black} />
        </View>
      );
    }

    return (
      <SectionList
        sections={songList}
        keyExtractor={(item, i) => i.toString()}
        renderSectionHeader={renderSectionTitle}
        renderItem={renderList}
        ListEmptyComponent={renderEmptyList}
      />
    );
  }

  return (
    <View style={styles.main}>
      <View style={[styles.container, styles.filterContainer]}>
        <Input
          value={search}
          onChangeText={(value: string) => setSearch(value)}
          placeholder="Search Artist Name"
          rightIcon={search && 'close-circle-outline'}
          onRightIconPress={() => setSearch('')}
          inputStyle={styles.search}
        />
        <SongGroupModal />
      </View>
      {renderSectionList()}
    </View>
  );
};

export default SongListScreen;
