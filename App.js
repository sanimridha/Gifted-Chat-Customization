import React, { useState, useCallback, useEffect } from "react";
import {
    View,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Welcome from Nitrx Community, hope your journy was amazing!!! ",
                createdAt: new Date(),
                quickReplies: {
                    type: "radio", // or 'checkbox',
                    keepIt: true,
                    values: [
                        {
                            title: "😋 Yes",
                            value: "yes",
                        },
                        {
                            title: "📷 Yes, let me show you with a picture!",
                            value: "yes_picture",
                        },
                        {
                            title: "😞 Nope. What?",
                            value: "no",
                        },
                    ],
                },
                user: {
                    _id: 2,
                    name: "React Native",
                },
            },
            {
                _id: 2,
                text: "This is a quick reply. Please wait untill the user come back",
                createdAt: new Date(),
                quickReplies: {
                    type: "checkbox", // or 'radio',
                    values: [
                        {
                            title: "Yes",
                            value: "yes",
                        },
                        {
                            title: "Yes, let me show you with a picture!",
                            value: "yes_picture",
                        },
                        {
                            title: "Nope. What?",
                            value: "no",
                        },
                    ],
                },
                user: {
                    _id: 2,
                    name: "React Native",
                },
            },
            {
                _id: 3,
                text: "My message",
                createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                user: {
                    _id: 2,
                    name: "React Native",
                    avatar: "https://facebook.github.io/react/img/logo_og.png",
                },
                image: "https://facebook.github.io/react/img/logo_og.png",
                // You can also add a video prop:
                video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
    }, []);
    // const renderSend = ({ props }) => {
    //     return (
    //         <send>
    //             <TouchableOpacity
    //                 activeOpacity={0.5}
    //                 style={{
    //                     backgroundColor: "#42D180",
    //                     height: 40,
    //                     width: 40,
    //                     borderRadius: 20,
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                 }}
    //             >
    //                 <Ionicons name="send-sharp" size={24} color="white" />
    //             </TouchableOpacity>
    //         </send>
    //     );
    // };

    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <View
                style={{
                    // backgroundColor: "coral",
                    height: 50,
                    width: "100%",
                    borderBottomColor: "#d1d1d1",
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={{ fontSize: 16 }}>Back</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 19 }}>Steve Jobs</Text>
                <TouchableOpacity activeOpacity={0.5}>
                    <Ionicons
                        name="md-person-add-outline"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            <GiftedChat
                alwaysShowSend={true}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                // renderSend={renderSend}
            />
        </View>
    );
}
export default App;
