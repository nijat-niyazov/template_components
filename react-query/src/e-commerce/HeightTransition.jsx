import React, { useState } from 'react';

const HeightTransition = () => {
  const [show, setshow] = useState(false);

  const handleShowNav = () => {
    setshow(p => !p);
  };

  return (
    <div className="p-2 text-gray-200 w-full">
      <button
        onClick={handleShowNav}
        className="bg-blue-900 p-2 rounded-lg font-bold"
      >
        Show Items
      </button>
      <div
        className={`grid ${
          show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }  w-full transition-all duration-300 text-black`}
      >
        <article className="bg-blue-300 mt-4 overflow-hidden flex  flex-col gap-2  rounded-md">
          <span className="p-2 m-2  font-bold  bg-amber-400 hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sunt dolores sequi ipsam natus illum, illo quis aperiam tempore
            pariatur quas sapiente eveniet tempora omnis eius soluta optio fuga
            animi.
          </span>
        </article>
        <article className="bg-blue-300 mt-4 overflow-hidden flex  flex-col gap-2  rounded-md">
          <span className="p-2 m-2  font-bold  bg-amber-400 hover:text-yellow-50 hover:bg-amber-500 transition-colors duration-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            quibusdam ducimus est dolorem inventore dolore maxime, saepe nemo
            tempore libero id aspernatur omnis fuga magnam accusantium?
            Accusamus temporibus voluptatum nulla. Doloribus, ipsam harum
            repellendus, omnis numquam tempora fugiat necessitatibus fugit illo
            totam at quibusdam explicabo iusto optio possimus voluptates
            voluptatibus iure nobis saepe commodi nisi perspiciatis eum error
            dolores! Ab? Voluptatum corporis corrupti quod, ab accusamus numquam
            veritatis fugiat perferendis ipsa quaerat suscipit nobis officia
            tempora quae, voluptates id quo rem recusandae aperiam voluptatibus
            blanditiis magni! Quia obcaecati commodi tenetur. Repellat, placeat
            eligendi. Sit, enim nostrum quam, commodi ducimus velit recusandae
            possimus quisquam accusamus sunt impedit nisi voluptatem maiores
            aliquam deleniti magnam asperiores maxime eligendi eveniet! At
            nesciunt dicta consectetur! At fugiat vitae unde officiis quibusdam
            dicta! Libero iste quia, perspiciatis ex, maiores magni earum enim,
            consectetur tempore nesciunt consequatur? Dolorem, libero. Hic, unde
            dolore incidunt deserunt nesciunt expedita nobis? Error ab non
            obcaecati accusantium, dolorem possimus aspernatur assumenda fugit.
            Maxime quae sunt saepe nihil ut et quisquam harum, ex rerum, beatae
            natus consequatur nemo! Veniam laborum temporibus voluptas fugit?
            Doloremque voluptates sunt ipsa sequi eos, atque dolor impedit,
            labore quam laudantium dolorem aspernatur sit soluta aut architecto
            est ex modi nostrum et illum beatae quae molestiae accusantium
            ipsam. Ipsa! Suscipit, officiis numquam error, nemo praesentium
            exercitationem quibusdam accusamus aliquam dolorem itaque doloremque
            corrupti natus alias voluptatibus aut pariatur maxime possimus.
            Fugiat veniam laudantium autem enim laborum. Odio, magnam
            architecto. Nihil dolores ut unde. Odit delectus, voluptatum
            maiores, ad, commodi vitae vero ipsam molestias quisquam expedita
            fugiat inventore fuga tempora blanditiis omnis iure adipisci dicta
            optio nobis nesciunt veritatis minima. Temporibus, qui? Architecto
            minus dicta possimus voluptatem ad ratione similique commodi
            aspernatur ipsum vitae neque sit, deserunt, fuga blanditiis vel
            expedita velit hic non nostrum repudiandae in provident a
            recusandae.
          </span>
        </article>
      </div>
    </div>
  );
};

export default HeightTransition;
