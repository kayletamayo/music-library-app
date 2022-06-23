import React from 'react';
import { View, Modal as BaseModal, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../../../theme/colors';
import styles from './Modal.styles';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  header?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isVisible, onClose, header, fullWidth = false, children }) => {
  const modalViewStyle = fullWidth ? styles.modalFull : styles.modalNotFull;

  return (
    <BaseModal animationType="fade" transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={[styles.modalView, modalViewStyle]}>
            <>
              {header && (
                <View style={[styles.modalHeader, styles.modalContent]}>
                  <Text style={styles.headerTitle}>{header}</Text>
                  <TouchableOpacity onPress={onClose}>
                    <Ionicons name="close" size={24} color={colors.black} />
                  </TouchableOpacity>
                </View>
              )}
              {children}
            </>
          </View>
        </View>
      </View>
    </BaseModal>
  );
};

export default Modal;
