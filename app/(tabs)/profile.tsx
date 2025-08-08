import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Camera, CreditCard as Edit3, Plus, Settings, Car, Wrench, Gauge } from 'lucide-react-native';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("Passionate BMW enthusiast with a love for track days and mountain drives. Always looking for the next adventure on four wheels.");

  const cars = [
    {
      id: 1,
      make: 'BMW',
      model: 'M3 Competition',
      year: 2023,
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg',
      mods: ['Cold Air Intake', 'Exhaust System', 'Lowering Springs'],
      stats: { hp: 503, torque: 479, weight: 3825 },
    },
    {
      id: 2,
      make: 'Porsche',
      model: '911 Turbo S',
      year: 2022,
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg',
      mods: ['Stage 1 Tune', 'Sport Exhaust'],
      stats: { hp: 640, torque: 590, weight: 3640 },
    },
  ];

  const handleSaveBio = () => {
    setIsEditing(false);
    // Save bio to backend
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#1A1A1A', '#2D2D2D']}
        style={styles.header}
      >
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.profileSection}>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }}
              style={styles.avatar}
            />
            <View style={styles.cameraOverlay}>
              <Camera size={16} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <Text style={styles.name}>Alex Johnson</Text>
          <Text style={styles.location}>Los Angeles, CA</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2</Text>
              <Text style={styles.statLabel}>Cars</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Groups</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12K</Text>
              <Text style={styles.statLabel}>Miles</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.bioSection}>
          <View style={styles.bioHeader}>
            <Text style={styles.sectionTitle}>About</Text>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => isEditing ? handleSaveBio() : setIsEditing(true)}
            >
              <Edit3 size={16} color="#FFD700" />
              <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
            </TouchableOpacity>
          </View>
          {isEditing ? (
            <TextInput
              style={styles.bioInput}
              value={bio}
              onChangeText={setBio}
              multiline
              placeholder="Tell us about yourself..."
              placeholderTextColor="#888888"
            />
          ) : (
            <Text style={styles.bioText}>{bio}</Text>
          )}
        </View>

        <View style={styles.carsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Cars</Text>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={16} color="#FFD700" />
              <Text style={styles.addButtonText}>Add Car</Text>
            </TouchableOpacity>
          </View>

          {cars.map((car) => (
            <TouchableOpacity key={car.id} style={styles.carCard}>
              <Image source={{ uri: car.image }} style={styles.carImage} />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                style={styles.carOverlay}
              />
              <View style={styles.carContent}>
                <View style={styles.carHeader}>
                  <Text style={styles.carTitle}>{car.year} {car.make} {car.model}</Text>
                  <View style={styles.carStats}>
                    <View style={styles.carStat}>
                      <Gauge size={14} color="#FFD700" />
                      <Text style={styles.carStatText}>{car.stats.hp} HP</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.carMods}>
                  <Wrench size={14} color="#888888" />
                  <Text style={styles.carModsText}>
                    {car.mods.length} modifications
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Recent Achievements</Text>
          <View style={styles.achievementsList}>
            <View style={styles.achievementItem}>
              <View style={styles.achievementIcon}>
                <Car size={20} color="#FFD700" />
              </View>
              <View style={styles.achievementText}>
                <Text style={styles.achievementName}>Car Collector</Text>
                <Text style={styles.achievementDescription}>Added your 2nd car</Text>
              </View>
              <Text style={styles.achievementDate}>2 days ago</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  settingsButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  cameraOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFD700',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  location: {
    fontSize: 16,
    color: '#888888',
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#333333',
    marginHorizontal: 24,
  },
  content: {
    padding: 24,
  },
  bioSection: {
    marginBottom: 32,
  },
  bioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: 4,
  },
  bioText: {
    fontSize: 16,
    color: '#CCCCCC',
    lineHeight: 24,
  },
  bioInput: {
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#FFFFFF',
    minHeight: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#333333',
  },
  carsSection: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: 4,
  },
  carCard: {
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  carImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  carOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  carContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  carHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  carStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carStat: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  carStatText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFD700',
    marginLeft: 4,
  },
  carMods: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carModsText: {
    fontSize: 14,
    color: '#CCCCCC',
    marginLeft: 4,
  },
  achievementsSection: {
    marginBottom: 32,
  },
  achievementsList: {
    marginTop: 16,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  achievementText: {
    flex: 1,
  },
  achievementName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  achievementDate: {
    fontSize: 12,
    color: '#888888',
  },
});