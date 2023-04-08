import { useMemo, useState } from 'react';
import './App.css';
import { allCategories } from './categories';

function App() {
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState(allCategories);
  const [newParent, setNewParent] = useState(0);

  const addMenu = e => {
    e.preventDefault();

    setCategories(prev => {
      return [
        ...prev,
        {
          id: categories.length + 1,
          name: categoryName,
          parent: newParent,
        },
      ];
    });

    setCategoryName('');
  };

  const removeMenu = id =>
    setCategories(categories.filter(category => category.id !== id));

  const onlySubCats = useMemo(
    () => categories.filter(category => category.parent === newParent),
    [categories, newParent]
  );

  const breadCrumb = parent => {
    if (parent === 0) return [];

    const existedParentOfSub = categories?.find(c => c.id === parent);
    // finding category id eqaul to sub's parent id

    return [existedParentOfSub, breadCrumb(existedParentOfSub.parent)];
  };

  const getBreadCrumb = parent => {
    return breadCrumb(parent).flat(Infinity).reverse();
    //returning finded cat and call again func till parent === 0 and flat Infinity because we want get rid of all levels of childArrays
  };

  const breadCrumbs = useMemo(() => getBreadCrumb(newParent), [newParent]);

  const getSubMenusCount = parent => {
    return categories.filter(c => Number(c.parent) === parent).length;
  };

  // console.log(getSubMenusCount(8));

  return (
    <div className="App">
      <div className="container">
        <h1>Okay</h1>

        <form className="myform" onSubmit={addMenu}>
          <input
            type="text"
            placeholder="Search category"
            className="searchInput"
            value={categoryName}
            onChange={e => setCategoryName(e.target.value)}
          />
          <button type="submit" className="submitButton">
            Add
          </button>
        </form>
        {breadCrumbs?.length !== 0 && (
          <nav className="nav">
            {breadCrumbs.length !== 0 &&
              breadCrumbs?.map((link, i) => {
                console.log(link);
                return (
                  <button key={i} onClick={() => setNewParent(link.parent)}>
                    {link.name}
                  </button>
                );
              })}
          </nav>
        )}

        <div className="categories">
          {onlySubCats?.map(category => {
            return (
              <div className="category" key={category.id}>
                {category.name}
                <nav className="secNav">
                  <button
                    type="button"
                    className="subCatButton"
                    onClick={() => setNewParent(category.id)}
                  >
                    Sub Categories <span>{getSubMenusCount(category.id)}</span>
                  </button>
                  <button
                    type="button"
                    className="subCatButton del"
                    onClick={() => removeMenu(category.id)}
                  >
                    Delete
                  </button>
                </nav>
              </div>
            );
          })}
        </div>

        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
