import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SongState } from '../../../store/reducers/songs-reducer';
import { ApplicationState } from '../../../store/store';
import { formatDate } from '../../../utils/formatter';

import styles from './SongDetailScreen.styles';

interface Props {}

const SongDetailScreen: React.FC<Props> = () => {
  const { songSelected } = useSelector<ApplicationState, SongState>((state) => state.songs);
  const { setOptions } = useNavigation<NativeStackNavigationProp<any>>();

  const { artworkUrl100, artistName, collectionName, trackName, releaseDate } = songSelected;

  useEffect(() => {
    setOptions({ title: 'Song Detail'})
  }, []);

  return (
    <View style={styles.main}>
      {artworkUrl100 && <Image source={{ uri: artworkUrl100 }} style={styles.trackImage} resizeMode="stretch" />}
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{trackName || 'Unknown Track Name'}</Text>
        <View style={styles.trackText}>
          <View style={styles.textRow}>
            <Text style={[styles.text, styles.category]}>Title: </Text>
            <Text style={styles.text}>{artistName || '--'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.textRow}>
            <Text style={[styles.text, styles.category]}>Album Name: </Text>
            <Text style={styles.text}>{collectionName || '--'}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.textRow}>
            <Text style={[styles.text, styles.category]}>Release Date: </Text>
            <Text style={styles.text}>{formatDate(releaseDate) || '--'}</Text>
          </View>
          <View style={styles.divider} />
        </View>
      </View>
    </View>
  );
}

export default SongDetailScreen;