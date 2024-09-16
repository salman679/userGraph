export default function Avatar() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="w-24 h-24 border-4 border-blue-400 rounded-full overflow-hidden animate-spin-slow">
        <img
          src="https://via.placeholder.com/150" // Replace with your image
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
