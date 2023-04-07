import { useState } from 'react';
import './App.css';
import { allCategories } from './categories';

function App() {
  const [categoryName, setCategoryName] = useState([]);
  const [categories, setCategories] = useState(allCategories);
  const [newParent, setNewParent] = useState(0);

  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [breadCrumbName, setBreadCrumbsName] = useState('');

  const onlySubCats = categories.filter(
    category => category.parent === newParent
  );

  const breadCrumbLinkMaker = category => {
    console.log(category);
    const finded = categories.find(each => each.name === category);
    setNewParent(finded.id);
  };

  const breadCrumb = category => {
    console.log(category.parent, newParent);
    setBreadCrumbs(prev => [...prev, category?.name]);
  };

  const subParent = category => {
    setNewParent(category.id);
    breadCrumb(category);
  };

  const submitHandler = e => {
    e.preventDefault();git
    console.log('hello');

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

  return (
    <div className="App">
      <div className="container">
        <h1>Okay</h1>

        <form className="myform" onSubmit={submitHandler}>
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
        {breadCrumbs.length !== 0 && (
          <nav className="nav">
            {breadCrumbs?.map((link, i) => {
              return (
                <button
                  key={i}
                  onClick={e => breadCrumbLinkMaker(e.target.innerHTML)}
                >
                  {link}
                </button>
              );
            })}
          </nav>
        )}

        <div className="categories">
          {onlySubCats.map(category => {
            return (
              <div className="category" key={category.id}>
                {category.name}

                <nav className="secNav">
                  <button
                    type="button"
                    className="subCatButton"
                    onClick={() => subParent(category)}
                  >
                    Sub Categories
                  </button>
                  <button type="button" className="subCatButton">
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
