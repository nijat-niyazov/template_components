import { useEffect, useRef, useState } from 'react';

const CategorySelect = ({ categories }) => {
  const [newParent, setNewParent] = useState(0);
  const [selectedParents, setSelectedParents] = useState([]);
  const [selectedCats, setSelectedCats] = useState([]);

  const lets = ['a', 'b', 'c'];

  console.log(lets.slice(0, 2));

  const filteredCategories = addedParent =>
    categories.filter(c => c.parent === addedParent);

  const getFilteredCategories = filteredCategories(newParent);

  const ref = useRef();

  useEffect(() => {
    console.log(ref.current.scrollLeft);

    ref.current.scrollTo({
      left: 450,
      behavior: 'smooth',
    });
  }, [selectedCats, selectedParents]);

  return (
    <div className="firstDiv" ref={ref}>
      {selectedParents.length > 0 &&
        selectedParents.map((parent, key) => (
          <div className="categories-cont" key={parent}>
            {filteredCategories(parent)?.map(cat => {
              return (
                <button
                  onClick={() => {
                    setNewParent(cat.id);

                    setSelectedParents([
                      ...selectedParents.slice(0, key),
                      cat.parent,
                    ]);
                    setSelectedCats([...selectedCats.slice(0, key), cat.id]);

                    // setSelectedCats(.slice(0, key));
                  }}
                  key={cat.id}
                  className={`setButton ${
                    selectedCats.includes(cat.id) ? 'active' : null
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        ))}

      {getFilteredCategories.length > 0 ? (
        <div className="categories-cont" style={{ background: 'pink' }}>
          {getFilteredCategories.map(cat => {
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setNewParent(cat.id);
                  setSelectedCats(c => [...c, cat.id]);
                  setSelectedParents(c => [...c, cat.parent]);
                }}
                className="setButton"
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="greeny">All Categories is selected</div>
      )}

      <pre>{JSON.stringify(selectedCats, null, 2)}</pre>
      <pre>{JSON.stringify(selectedParents, null, 2)}</pre>
    </div>
  );
};

export default CategorySelect;
