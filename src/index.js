import Decks from './components/decks/Decks';
import AddDeck from './components/add-deck/AddDeck';

import {createBottomTabNavigator,createStackNavigator,createAppContainer} from 'react-navigation';
import AddCard from './components/add-card/AddCard';
import Deck from './components/deck/Deck';
import StartQuiz from './components/start-quiz/StartQuiz';


const DecksNav=createStackNavigator({
    Decks:{screen:Decks},
    AddDeck:{screen:AddDeck},
    Deck:{screen:Deck},
    AddCard:{screen:AddCard},
    StartQuiz:{screen:StartQuiz}
});

const Tabs=createBottomTabNavigator({
    Decks:{screen:DecksNav},
    AddDeck:{screen:AddDeck}
},{
    navigationOptions:({navigation})=>({

        tabBarIcon:({})=>{
            const {routeName}=navigation.state;
            let iconName;
            if(routeName==='Decks'){
                
            }
        }

    })
});


const AppContainer=createAppContainer(Tabs);


export default AppContainer;