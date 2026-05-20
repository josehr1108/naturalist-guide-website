"use client";

import FacebookPostCard from "./FacebookPostCard";

const facebookPosts = [
  {
    id: 1,
    authorName: "Michael Salyers",
    citation: `I must write a recommendation for Raul Obregon Birdman CR for anyone wanting an amazing
      birding experience in CR! He was recommended in another post in this group so I reached
      out on WhatsApp and he was so kind and supportive- proviniding options for the very limited
      time frame and location my mom and I would be.  He communicated very clearly and gave us all
      the info we needed before we met him very early in the rain at Bogarin Trail (he even got the
      tickets for us in advance as we needed to start before they opened). He came prepared for the
      rain with extra equipment for us (umbrellas and binoculars) and we had the MOST AMAZING time!
      His passion and enthusiasm and expert knowledge of all things birds and nature of Costa Rica
      were so awesome- we saw sooo many cool birds but also bonus of Jesus Lizards and Sloths.
      Even after our time- he shared a recommendation for Soda y Mirador Cinchona and we were blown away-
      we would have never made that stop on our way back to SJO without his guidance and it was again one
      of the highlights!  I cannot recommend him enough and hope you consider him for your next trip in CR!!`,
    postUrl:
      "https://www.facebook.com/groups/1470436756815328/posts/1918672655325067/",
  },
  {
    id: 2,
    authorName: "Laura Davenport",
    citation: `I just spent a very long day with Raul, and it was FABULOUS! I found him on Facebook
    and was nervous about not knowing him before that day. He was awesome. So positive and kind and
    accommodating. I had messaged him a list of targets/species I wanted to get pictures of, and he
    took me to places where he knew they can be seen. To be honest, we didn't have great luck on my
    list because #1, that's how birding goes... you can't control what shows up when. And #2, it rained
    a LOT of the day! But don't let rain discourage you because the lighting was perfect when we saw
    the birds we did, and we still got great species. There were 2 that even he was excited about! 
    At the very beginning of the day, my camera decided to stop working right. Raul did everything he could
    to try to figure it out, and it mostly resolved. Besides that, when my camera didn't work, he used his
    scope to get fantastic pictures with my cell phone! I will attach a couple of those. 
    He picked me up from my hotel and dropped me back off. He stopped along the way whenever he or I saw something.
    And his rate was very reasonable for all of that. I'm extremely happy with his service and would use him
    as a guide again. I have even given his information to my hotel as a reference for any guest wanting a guide.
    He also does sloth tours.`,
    postUrl:
      "https://www.facebook.com/groups/1507645066464739/posts/2000189557210285/",
  },
  {
    id: 3,
    authorName: "Sanjeev Singhal",
    citation: `I would like to give a big shoutout and thank you to Raul Obregon!
      He took us  on a bird watching tour at Arenal Observatory Lodge and
      is super knowledgeable and a great spotter.  I wasn’t feeling well
      at all the day we went but he was very kind and helped me along.
      He even went way above and beyond and drove 6 hours to pick up my
      daughter from the airport the next day when I was still ill.  Just amazing!`,
    postUrl:
      "https://www.facebook.com/groups/819152661604872/posts/3014692518717531/",
  },
];

const ReviewsSection = () => {
  return (
    <section>
      <div className="bg-[whitesmoke] py-8">
        <h2 className="text-3xl font-bold mb-20 text-center text-primary">
          Reviews
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-2">
          {facebookPosts.map((post) => (
            <FacebookPostCard
              key={post.id}
              authorName={post.authorName}
              citation={post.citation}
              postUrl={post.postUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
