import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { X, Gauge, Weight, Wrench, Calendar, CreditCard as Edit } from 'lucide-react-native';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  image: string;
  mods: string[];
  stats: {
    hp: number;
    torque: number;
    weight: number;
  };
}

interface CarDetailModalProps {
  visible: boolean;
  car: Car | null;
  onClose: () => void;
}

export default function CarDetailModal({ visible, car, onClose }: CarDetailModalProps) {
  if (!car) return null;

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <View style={styles.container}>
        <Image source={{ uri: car.image }} style={styles.heroImage} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.heroOverlay}
        />
        
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <X size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton}>
          <Edit size={20} color="#FFD700" />
        </TouchableOpacity>

        <View style={styles.heroContent}>
          <Text style={styles.carTitle}>{car.year} {car.make} {car.model}</Text>
          <View style={styles.yearBadge}>
            <Calendar size={14} color="#FFD700" />
            <Text style={styles.yearText}>{car.year}</Text>
          </View>
        </View>

        <ScrollView style={styles.details} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Performance Stats</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Gauge size={24} color="#EF4444" />
                <Text style={styles.statValue}>{car.stats.hp}</Text>
                <Text style={styles.statLabel}>Horsepower</Text>
              </View>
              <View style={styles.statCard}>
                <Gauge size={24} color="#F59E0B" />
                <Text style={styles.statValue}>{car.stats.torque}</Text>
                <Text style={styles.statLabel}>Torque (lb-ft)</Text>
              </View>
              <View style={styles.statCard}>
                <Weight size={24} color="#10B981" />
                <Text style={styles.statValue}>{car.stats.weight}</Text>
                <Text style={styles.statLabel}>Weight (lbs)</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.modsHeader}>
              <Text style={styles.sectionTitle}>Modifications</Text>
              <TouchableOpacity style={styles.addModButton}>
                <Wrench size={16} color="#FFD700" />
                <Text style={styles.addModText}>Add Mod</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modsList}>
              {car.mods.map((mod, index) => (
                <View key={index} style={styles.modItem}>
                  <View style={styles.modDot} />
                  <Text style={styles.modText}>{mod}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gallery</Text>
            <View style={styles.galleryGrid}>
              {[1, 2, 3, 4].map((item) => (
                <TouchableOpacity key={item} style={styles.galleryItem}>
                  <Image source={{ uri: car.image }} style={styles.galleryImage} />
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.addPhotoButton}>
                <Text style={styles.addPhotoText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  heroImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  heroContent: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    top: 200,
    justifyContent: 'flex-end',
  },
  carTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  yearBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  yearText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: 4,
  },
  details: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    paddingTop: 24,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#333333',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
    textAlign: 'center',
  },
  modsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addModButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  addModText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: 4,
  },
  modsList: {
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  modItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  modDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFD700',
    marginRight: 12,
  },
  modText: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: '48%',
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addPhotoButton: {
    width: '48%',
    height: 120,
    borderRadius: 12,
    backgroundColor: '#1F1F1F',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  addPhotoText: {
    fontSize: 32,
    color: '#888888',
  },
});