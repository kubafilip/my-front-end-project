import React, {Component} from "react";
import "./styles/Sport.css";


class Sport extends Component {
    
    render() {
        return (
            <div className="sport">
                <p>It’s no secret that physical activity is good for you, but do you know about all the ways that exercise can improve your health? Check it out:</p>
                <img src="http://dziadowakloda.pl/files/image/OSWIATA/sportsballs1.png" alt="Sport"/>
                <ol>         
                    <li><b>Improved cardiovascular health.</b> The heart is a muscle, it needs to be worked out! 
                    Regular exercise can help improve the overall health of your entire cardiovascular system.</li>
                    <li><b>Lowers risk of heart disease, stroke, and diabetes.</b> A healthier heart means reduced risk of cardiovascular disease, stroke, and diabetes.</li>
                    <li> <b>Helps manage weight.</b> Not only does physical activity burn calories, it also improves your metabolism in the long run.</li>
                    <li><b>Reduced blood pressure.</b> Physical activity keeps your heart and blood vessels healthy, helping to prevent hypertension.</li>
                    <li><b>Enhanced aerobic fitness.</b> Participating in aerobic activities — such as running, cycling, or swimming — can improve your body’s ability 
                    to transport and utilize oxygen in the lungs and blood.</li>
                    <li><b> Improved muscular strength and endurance.</b> Resistance exercises challenge your muscular system, resulting in bigger, stronger muscles.</li>
                    <li><b>Improved joint flexibility and range of motion.</b> Improved flexibility reduces risk of injury.</li>
                    <li><b>Stress relief.</b> Exercise is a great mood-booster and has proven to be an effective method of stress relief.</li>
                    <li><b>Lowers risk of certain types of cancer.</b> People who exercise regularly are less likely to develop breast, colon, and lung cancer.</li>
                    <li><b>Control cholesterol.</b> Exercise decreases LDL (bad cholesterol) levels and increases HDL (good cholesterol) levels.</li>
                    <li><b>Ward off osteoporosis.</b> Building dense, strong bones is another benefit of physical activity.</li>
                    <li><b>Strengthens immune system.</b> Exercising more = getting sick less.</li>
                    <li><b>Improved sleep.</b> We know just how important sleep is, and exercising can help you capitalize on these benefits.</li>
                    <li><b>Mental health benefits.</b> Exercise is good for your mental health too, as it can battle feelings of anxiety and depression, sharpen your focus, 
                    and improve self esteem.</li>                   
                    <li><b>Prolonged life.</b> When you add all of these benefits together, what do you get? A longer, healthier, more enjoyable life!</li>               
                </ol>
            </div>
        );
    }
}

export default Sport;