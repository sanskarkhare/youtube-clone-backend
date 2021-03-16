import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// import { SidebarData } from './SidebarData';

export default function Sidebar() {
    return (
        <div style={{ width: 250 }}>
            <ul className="sidebarRows">
                
                        <li className="row">
                            <div id="iconContainer"><HomeIcon /></div>
                            <div id="titleContainer">
                                <h1>Home</h1>
                            </div>
                            
                        </li>
                        <li className="row">
                            
                            <div id="iconContainer"><WhatshotIcon /></div>
                            <div id="titleContainer">
                                <h1>Trending</h1>
                            </div>
                        </li>
                        <li className="row">
                            
                            <div id="iconContainer"><SubscriptionsIcon /></div>
                            <div id="titleContainer">
                                <h1>Subscriptions</h1>
                            </div>
                        </li>
                        <li className="row">
                            
                            <div id="iconContainer"><ThumbUpIcon /></div>
                            <div id="titleContainer">
                                <h1>Liked Videos</h1>
                            </div>
                        </li>
                  
            </ul>
        </div>
    )
}
