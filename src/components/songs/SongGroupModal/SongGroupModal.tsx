import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Modal } from '../../_shared';

import { colors } from '../../../theme/colors';
import styles from './SongGroupModal.styles';
import { SongSections, SONG_SECTIONS } from '../../../constants/songs';
import { ApplicationState } from '../../../store/store';
import { SongState } from '../../../store/reducers/songs-reducer';
import { actionSetSectionBy } from '../../../store/actions/songs-actions';

interface Props {}

const SongGroupModal: React.FC<Props> = () => {
  const { sectionBy } = useSelector<ApplicationState, SongState>(state => state.songs)
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const dispatch = useDispatch();

  const options = [
    {
      name: 'Collection Name',
      value: SONG_SECTIONS.COLLECTION_NAME,
    },
    {
      name: 'Release Date',
      value: SONG_SECTIONS.RELEASED_DATE,
    },
  ];

  const showOptionsModal = () => setShowOptions(true);

  const hideOptionsModal = () => setShowOptions(false);

  const onSelectOption = (value: SongSections) => {
    console.log(value);
    dispatch(actionSetSectionBy(value));
    hideOptionsModal();
  }

  const renderOptions = () => {
    return options.map(({ name, value }, index) => (
      <View key={value}>
        <TouchableNativeFeedback onPress={() => onSelectOption(value)}>
          <View style={styles.option}>
            <Text style={styles.optionText}>{name}</Text>
            <View>
              {value === sectionBy ? (
                <Ionicons name="checkmark-circle" size={30} color={colors.black} />
              ) : (
                <View style={styles.iconPlaceholder} />
              )}
            </View>
          </View>
        </TouchableNativeFeedback>
        {index !== options.length - 1 && <View style={styles.divider} />}
      </View>
    ));
  }

  return (
    <View>
      <TouchableOpacity onPress={showOptionsModal}>
        <View style={styles.filterBtn}>
          <Ionicons name="filter" size={24} color={colors.black} />
        </View>
      </TouchableOpacity>

      <Modal isVisible={showOptions} onClose={hideOptionsModal} header="Group songs by: ">
        <View style={styles.options}>
          {renderOptions()}
        </View>
      </Modal>
    </View>
  );
}

export default SongGroupModal;
