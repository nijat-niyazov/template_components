import axios from 'axios';

const url = 'http://localhost:3500/';

export const endPoint = 'products/';

export const mainApi = axios.create({
  baseURL: url,
});

export const fetchProducts = async () => {
  const response = await mainApi.get(endPoint);
  if (response.status !== 200) throw new Error('OOPs something is wong');

  return response.data;
};

export const fetchWithPagination = async cacheKey => {
  // console.log(cacheKey);
  // console.log('executed');
  const pageNumber = cacheKey.split('/')[1];
  const currentUrl = new URLSearchParams(window.location.search);
  console.log(currentUrl.toString());
  const activePage = currentUrl.get('_page');
  const q = currentUrl.get('q');
  console.log(q);
  const brands = currentUrl.getAll('brand');

  const uri = 'samsung+galaxy';
  const encoded = encodeURI(uri);
  console.log(encoded);

  // const brandParam = brand
  // .map(category => `brand=${encodeURIComponent(category)}`)
  // .join('&');
  // console.log(brandParam);
  // const brand = decodeURIComponent('brand%3DApple%26brand%3DSamsung');
  // const brand = 'brand=Apple&brand=Samsung';
  // const brand =(`?x=${encodeURIComponent('test?')}`);

  // console.log(`?x=${encodeURIComponent('test?&')}`);
  // console.log(`?x=${decodeURIComponent('test?&')}`);

  const sorted = currentUrl.get('sorted');
  const ordered = currentUrl.get('order');

  // console.log({pageNumber,cacheKey,sorted,activePage},currentUrl.toString());

  const params = {
    q: encoded,
    _page: activePage ?? pageNumber,
    _limit: 5,
    _sort: sorted,
    _order: 'desc',
    // brand,
    // ...(brandParam && { brand: brandParam }),
  };

  if (brands.length > 0) {
    brands.forEach((brand, index) => {
      params[`brand[${index}]`] = brand;
    });
  }

  !sorted && delete params._sort && delete params._order;
  q == 'null' && delete params.q;

  // const getParams = new URLSearchParams(params);
  // const limit = parseInt(getParams.get('_limit'));

  // console.log(getParams.toString());

  const response = await mainApi.get(endPoint, { params });
  if (response.status !== 200) throw new Error('OOPs something is wong');

  // findTotalPages(
  //   Math.ceil(parseInt(response.headers['x-total-count']) / limit)
  // );

  return response.data;
};
