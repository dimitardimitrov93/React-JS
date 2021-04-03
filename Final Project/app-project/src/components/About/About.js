import style from './About.module.css';

const About = ({
    match,
    location,
    history
}) => {
    return (
        <div className={style.aboutWrapper}>
            <div className={style.aboutContent}>
                <h1>About page</h1>
                <p>Ut auctor tristique fermentum. In ante mauris, laoreet ac neque eu, tristique pretium erat. Nunc vitae orci sollicitudin libero ullamcorper molestie et ut massa. Nulla nisl ligula, finibus ac metus non, eleifend luctus odio. Pellentesque at condimentum turpis, porta sagittis quam. Cras quis turpis nec purus mollis pretium ut non mauris. Suspendisse potenti. Morbi bibendum, dolor quis blandit elementum, justo sapien pulvinar libero, eget ultricies nulla est fermentum lorem. Morbi facilisis sodales velit vitae dignissim. </p>
                <p>Ut venenatis ipsum vitae elit rutrum lacinia. Sed in nunc finibus, vehicula magna eu, fermentum urna. Vivamus arcu ipsum, semper nec nisl non, dignissim dignissim purus. Donec vitae tellus vitae odio congue porta. Duis enim quam, commodo nec lacinia eu, consequat ac ligula. Sed porta posuere libero, in porttitor urna dapibus non. Donec sodales, mauris vitae gravida euismod, sapien enim sodales neque, vitae feugiat purus nunc nec nisi.</p>
                <p>Ut auctor tristique fermentum. In ante mauris, laoreet ac neque eu, tristique pretium erat. Nunc vitae orci sollicitudin libero ullamcorper molestie et ut massa. Nulla nisl ligula, finibus ac metus non, eleifend luctus odio. Pellentesque at condimentum turpis, porta sagittis quam. Cras quis turpis nec purus mollis pretium ut non mauris. Suspendisse potenti. Morbi bibendum, dolor quis blandit elementum, justo sapien pulvinar libero, eget ultricies nulla est fermentum lorem. Morbi facilisis sodales velit vitae dignissim. </p>
                <p>Ut venenatis ipsum vitae elit rutrum lacinia. Sed in nunc finibus, vehicula magna eu, fermentum urna. Vivamus arcu ipsum, semper nec nisl non, dignissim dignissim purus. Donec vitae tellus vitae odio congue porta. Duis enim quam, commodo nec lacinia eu, consequat ac ligula. Sed porta posuere libero, in porttitor urna dapibus non. Donec sodales, mauris vitae gravida euismod, sapien enim sodales neque, vitae feugiat purus nunc nec nisi.</p>
            </div>
        </div>
    );
}

export default About;