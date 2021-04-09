import style from './Main.module.css';

function Main({
    posts
}) {
    return (
        <div className={style.mainWrapper}>
            <main className={style.main}>
                <h1>Why Coffee?</h1>
                <article>
                    <p>
                        Since the discovery of the coffee plant, which is said to have originated in Ethiopia when a goat herder noticed his goats’ increased energy levels after they accidentally consumed the unknown berries, science has made great advances in the coffee world. For starters, the average American gets most of their antioxidants from coffee (with New York in the lead drinking almost seven times as much as the rest of the United States). With this in mind, by drinking black coffee every day, you are actually decreasing your chances of developing certain diseases. Here’s how coffee can protect your brain from dementia.
                    </p>
                    <p>
                        According to Beth Witherspoon, registered dietitian consultant for Community Coffee Company, “Moderate coffee consumption (3-5 cups daily) may be linked to decreased mortality from all causes, reduced risk of developing type 2 diabetes, and decreased risk of Parkinson’s disease, dementia, liver cirrhosis, and certain cancers, including liver and endometrium.” Experts have even referred to coffee as a “miracle drug,” due to its miraculous ability to prevent such diseases. “Basically it helps you live longer,” says Janet Rich Pittman, Dementia Prevention Specialist and Senior Health Adviser, known as The Brain Nerd. Experts make note, however, that coffee’s benefits are best attained with black caffeinated coffee. “For the antioxidants to work…you’ve got to give up your cream and sugar,” says Pittman. (If you can’t, here’s a healthy homemade creamer recipe you should try.)
                    </p>
                    <p>
                        In addition to preventing diseases, coffee’s caffeine content is directly correlated with your brain. These effects are especially seen at low levels of consumption (about 75 mg). According to Witherspoon, “Caffeine has been associated with positive actions on the brain, including improved mental alertness and attention, help with concentration, and improved mood.” On the note of an improved mood and, ultimately, a decrease in depression, according to the AARP, “Coffee cuts suicide risk. A 2013 study by Harvard’s School of Public Health found that those who drank two to three cups of caffeinated coffee a day cut their suicide risk by 45 percent—possibly because caffeine’s stimulant effect helps boost people’s moods.” Learn more about how coffee can make you less depressed.
                    </p>
                    <p className={style.infoSource}>
                        Source:
                        <a href="https://www.thehealthy.com/food/drink-coffee-every-day/">https://www.thehealthy.com/food/drink-coffee-every-day/</a>
                    </p>
                </article>
                {/* <div className="posts">
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div> */}
            </main>
        </div>
    );
}

export default Main;