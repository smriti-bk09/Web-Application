export default function Input({ labelName, type, placeholder }) {
  return (
    <div>
      
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {labelName}
      </label>

      
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}