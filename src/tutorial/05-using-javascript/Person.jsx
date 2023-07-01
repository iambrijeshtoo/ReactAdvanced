export function Person({ name, nickName, images }) {
  const image = images[0].small.url;

  return (
    <div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
