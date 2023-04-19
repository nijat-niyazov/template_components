import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// #1. meta name="description" content="JavaScript'te async programlama, iş parçacığı yönetimini kolaylaştırabilir. Bu yazıda, async programlama konsepti, kullanımı ve faydaları hakkında bilgi edinin.": Bu açıklama etiketi, arama sonuçları sayfalarında gösterilecek özet açıklamadır. Kullanıcılar bu özet sayesinde yazınızın konusunu ve özetini anlayabilirler.

// #2. meta name="keywords" content="JavaScript, async programlama, iş parçacığı, yönetimi": Bu etiket, yazıda kullanılan anahtar kelimeleri içerir. Bu anahtar kelimeler, arama motorlarına yazınızın konusu hakkında daha fazla bilgi sağlar.

// #3. meta property="og:title" content="Async Programlama: JavaScript'te İş Parçacığı Yönetimi": Bu etiket, yazınızın sosyal medya paylaşımlarında ve diğer paylaşım linklerinde kullanılacak başlık etiketidir.

// #4. meta property="og:description" content="JavaScript'te async programlama, iş parçacığı yönetimini kolaylaştırabilir. Bu yazıda, async programlama konsepti, kullanımı ve faydaları hakkında bilgi edinin.": Bu etiket, sosyal medya paylaşımları ve diğer paylaşım linkleri için açıklama etiketidir.

// #5. meta property="og:image" content="https://www.example.com/async-programlama-image.jpg": Bu etiket, yazınızla ilgili bir görsel içeren bir resim URL'si içerir. Bu görsel, sosyal medya paylaşımlarında ve diğer paylaşım linklerinde gösterilecektir.

const Home = () => {
  const [btn, setBtn] = useState(0);

  return (
    <div>
      <Helmet>
        <title>{`(${btn})`} USE Helmet for SEOS</title>
        {/* it used for changing page name */}

        <link rel="canonical" href="react-helmet.com" />
        {/* it is main seen web url in google */}

        <link
          rel="icon"
          type="image/png"
          href="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
          sizes="16x16"
        />

        <meta name="description" content="Helmet used for metatags and SEO" />
        {/* little description for app that is placed above name */}

        <meta property="og:site_name" content="REACT HELMET" />
        {/* used for when sharing on social medias as name of site */}

        <meta property="og:url" content="react-helmet.com" />
        {/* used for when sharing on social medias as link */}

        <meta property="og:title" content="React Helmet Usage" />
        {/* used for when sharing on social medias as title */}

        <meta property="og:description" content="How implement Helmet" />
        {/* used for when sharing on social medias as description */}

        <meta
          property="og:image"
          content="https://thumbs.dreamstime.com/b/tiktok-glitch-icon-social-media-destination-short-form-mobile-videos-tik-tok-network-kyiv-ukraine-may-184748839.jpg"
        />
        {/* used for when sharing on social medias as image */}
      </Helmet>
      <div>
        <button onClick={() => setBtn(btn + 1)}>click me </button>
        <h2 style={{ marginBottom: '20px' }}>Home Page</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat
          ullam minima fugiat dolore praesentium ea iste ducimus quidem
          dignissimos illum cumque itaque, facilis blanditiis reprehenderit,
          molestiae assumenda, animi possimus? Ratione hic sunt est minima rerum
          nostrum harum. Magni quo, numquam soluta optio voluptates unde labore
          nostrum ipsa odio, nam harum adipisci? Delectus porro qui, facilis
          nobis illo eligendi suscipit? Doloribus soluta quas, rem aspernatur
          expedita blanditiis non recusandae praesentium esse delectus impedit
          dicta ipsa facilis sint excepturi temporibus ipsam aliquid atque
          tempore nihil tempora rerum consequatur in perferendis. Tenetur. Non,
          iusto a odio sed, rem laborum molestiae neque cum quo sit ducimus
          dolorum doloremque quae sunt unde. Cupiditate iusto mollitia illum
          officiis, at eveniet aspernatur veniam pariatur quisquam nesciunt?
        </span>
      </div>
    </div>
  );
};

export default Home;
