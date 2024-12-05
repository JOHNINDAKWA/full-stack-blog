import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum, quasi.
          </h1>
          <div className=" flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Ted Malanda</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            ipsa necessitatibus nulla earum, facilis perferendis expedita illo
            quia distinctio quam. Aspernatur temporibus nam corrupti in
            necessitatibus quam reprehenderit distinctio totam!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}

        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            I can’t remember the first time I saw the sun. Memories only go back
            to when I was about three years old, and by then I was about four
            feet tall. I lived on the corner of two streets, but they were never
            that busy. Always the same people going back and forth all day long.
            My home was on the smaller side; a one story with beige siding. I’d
            look into the windows just to see what was going on, and sometimes,
            looking back at me, would be a little boy.
          </p>
          <p>
            I had grown by the time the boy finally approached me. He looked up
            at me and studied me, but I was too tall for us to play together.
            His dad mowed the lawn a lot, kept it pretty short. The boy would
            ride on his dad’s lap, and he’d scream when his dad would go in
            circles around me. On sunny days, him and his parents would be
            outside playing and eating. They would play tag, and would let the
            boy win. He was far too small to keep up with them, so I guess it
            makes sense just to let him feel good.
          </p>
          <p>
            The year goes by fast until it hits winter. Everything seems to slow
            down then. I’m always tired, and piece-by-piece I fall a part. The
            wind would pick up, and these pieces of me would blow away down the
            street and out of sight. The boy didn’t come out to see me often
            when it was winter.
          </p>

          <p>
            The first day of spring is my favorite day of the year; when the
            sunlight hits me, and I feel the warmth on my back. The boy was
            taller now, and so was I. Now, he was no longer the only one. There
            was another much smaller boy. When I would look into the windows,
            the smaller boy would be looking back at me. I had come to know the
            taller boy by David, as that is what everyone seemed to call him. He
            would come outside and climb my arms, and we would sit together and
            watch the sun go down. Once the light disappeared behind the
            horizon, he would jump down, look at me for a second, and then go
            back inside.
          </p>
          <p>
            It seems every boy loves football when they hit a certain age. David
            and his brother and their father would always be outside when the
            weather permitted, tossing around the ball and chasing after one
            another. They would go around me, dodging each other, and using my
            arms to try to jump over the other. I never saw myself as a football
            player, but it definitely was never a bad time. David and his
            brother would sit on my arms and watch the sun go down. When it went
            behind the horizon, both would jump down, look at me for a second,
            and then go back inside.
          </p>
          <p>
            Yelling coming from the house was more common now. Every few days
            the boys’ father would slam the door and drive away in his truck. At
            first the brothers would run out together and yell at him to come
            back. Eventually they stopped running out after him, and eventually
            I stopped seeing their father anymore.
          </p>
          <p>
            I saw less and less of David and his brother. They’d leave home
            early in their cars, and then come back very late. I was always
            alone in the yard now. I would look into the windows, but I never
            saw much. The grass was longer than usual, the neighborhood older
            than it was, and I taller.
          </p>

          <p>
            The boys were gone by next summer, and their mother put the house up
            for sale. Everyday I just stood in the yard, watching cars go by and
            watching the lawn service poorly cut the grass. The boys’ mother
            started coming out to see me. At first she would just walk around me
            or sit by me. One day at sunset, she came out of the house. She
            climbed up my arms, and watched the sun go out of sight. She got
            down and looked at me, nodded, and went inside.
          </p>
          <p>
            The house had been empty for some time. Months passed, seasons
            changed, my leaves fell off. It’s funny, for standing here so long
            you’d think I had my fill of this world, its people. You’d think it
            would be all right to be alone. You’d think I wouldn’t feel the
            years go by.
          </p>
          <p>
            Spring had started not too long ago when a moving truck showed up in
            front of my home. A young couple got out, holding their young
            daughter. The grass was mowed again, and lights were on in the house
            at night. I’d look into the windows just to see what was going on,
            and sometimes, looking back at me, would be a little girl.
          </p>
        </div>
        {/* menu */}

        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">Ted Malanda</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              recusandae?
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Kenyan Culture</Link>
            <Link className="underline">Social Commentary</Link>
            <Link className="underline">Humor & Satire</Link>
            <Link className="underline">Global Perspectives</Link>
            <Link className="underline">Personal Stories</Link>
          </div>

          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default SinglePostPage;
