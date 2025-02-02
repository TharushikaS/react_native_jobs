import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { 
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, welcome
} from '../components';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightwhite}}>
            <Stack.Screen
                options = {{
                    headerStyle: { backgroundColor: COLORS.lightwhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%" />
                    ),
                    headerTitle: ""
                }}        
             />

            <ScrollView showsVerticalScrollIndicator = {false}>
                <View
                    style = {{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome
                        search = {searchTerm}
                        setSearch = {setSearchTerm}
                        handleClick = {() => {
                            if(searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                        
                    
                    />

                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

export default Home;