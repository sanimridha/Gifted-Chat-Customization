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
                text: "This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT",
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
                text: "This is a quick reply. Do you love Gifted Chat? (checkbox)",
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
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
    }, []);

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
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
}
export default App;
