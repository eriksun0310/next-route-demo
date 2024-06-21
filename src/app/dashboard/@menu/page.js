const getData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const Menu = async () => {
  const data = await getData();
  return <div>Menu</div>;
};

export default Menu;
