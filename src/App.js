import UserCard from "./components/UserCard/UserCard";
import Counter from "./components/Counter/Counter";

import "./app.scss";

function App() {
  const users = [
    { name: 'Vitor Pop33', age: 3, location: 'London', descrFollowers: 'Followers', descrLikes: 'Likes', descrPhotos: 'Photos', FollowersCount: 68, LikesCount: 23, PhotosCount: 111, userImg: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
    { name: 'Sasha 33', age: 323, location: 'Bishkek', descrFollowers: 'Followers', descrLikes: 'Likes', descrPhotos: 'Photos', FollowersCount: 555, LikesCount: 33, PhotosCount: 222, userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
    { name: 'Sanya Seriev', age: 311, location: 'Moscow', descrFollowers: 'Followers', descrLikes: 'Likes', descrPhotos: 'Photos', FollowersCount: 4445, LikesCount: 45, PhotosCount: 333, userImg: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
  ]
  return (
    <div className="app">
      {
        users.map((user, idx) => {
          return <UserCard userImg={user.userImg} userName={user.name} userAge={user.age} userLocation={user.location} userFollowers={user.descrFollowers} userLikes={user.descrLikes} userPhotosCount={user.PhotosCount} userPhotos={user.descrPhotos} userFollowersCount={user.FollowersCount} userLikesCount={user.LikesCount} key={idx + user.age} />
        })
      }

      {
        < Counter />
      }
    </div>


  );
}




export default App;

