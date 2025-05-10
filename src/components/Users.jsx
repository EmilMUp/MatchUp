import { useState } from "react";
import { Circle } from "lucide-react";

const Users = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "Alice", online: true },
    { id: 2, name: "Bob", online: false },
    { id: 3, name: "Charlie", online: true },
    { id: 4, name: "Diana", online: false },
    { id: 5, name: "Eve", online: true },
  ]);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-xl font-bold mb-4 text-center">Vänner</h2>
      <ul className="space-y-4">
        {friends.map((friend) => (
          <li
            key={friend.id}
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition"
          >
            <span className="text-lg">{friend.name}</span>
            <div className="flex items-center gap-2">
              <Circle
                size={12}
                className={friend.online ? "text-green-500" : "text-gray-400"}
                fill={friend.online ? "green" : "gray"}
              />
              <span className="text-sm text-gray-600">
                {friend.online ? "Online" : "Offline"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;