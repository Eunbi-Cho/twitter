import { doc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService, storageService } from "../fbase";
import Tweet from "../components/Tweet";
import { v4 as uuidv4 } from "uuid";
import TweetFactory from "../components/TweetFactory";

const Home= ({ userObj }) => {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        dbService.collection("tweets").onSnapshot((snapshot) => {
            const tweetArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setTweets(tweetArray);
    });
}, []);
    return (
    <div>
        <TweetFactory userObj={userObj} />
        <div>
            {tweets.map((tweet) => (
                <Tweet 
                    key={tweet.id} 
                    tweetObj={tweet} 
                    isOwner={tweet.creatorId === userObj.uid} 
                />
            ))}
        </div>
    </div>
    );
 };

export default Home;