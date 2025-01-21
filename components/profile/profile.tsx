import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from "./profile.styles"
import { SafeAreaView } from 'react-native-safe-area-context';
export function ProfileCard() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Profile Section */}
            <View style={styles.row}>
                {/* Profile Image */}
                <Image 
                    style={styles.profilePic} 
                    source={{
                        uri: "https://www.shutterstock.com/image-vector/young-woman-writes-code-on-600nw-1731157933.jpg",
                    }} 
                />

                {/* Text Section */}
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Khyati Satija</Text>
                    <Text style={styles.description}>I am a full-stack developer</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

