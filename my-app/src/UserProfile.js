import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Welcome back</h1>
      <h2>You rolled User ID: {id} 😮 </h2>
    </div>
  );
}

export default UserProfile;
