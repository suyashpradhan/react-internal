// !Data Structure
/**
 * todos:[{
 *    id: string
 *    name: string
 *    dateCreated: Date
 *    dateCompleted: Date
 *    isComplete: boolean
 * }]
 */

// !Components
/**
 * TodoList Parent Component
 * Todo (Individual Todo Component)
 */

// !App Architecture
/**
 * useState for state management
 * localStorage for saving/deleting todos
 * html form for handling form
 * tailwind css for styling
 */

export default function TodoApp() {
  return (
    <>
      <h1 className="text-6xl text-gray-400 font-medium">TodoApp</h1>
    </>
  );
}
