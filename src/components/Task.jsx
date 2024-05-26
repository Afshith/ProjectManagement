import NewTask from "./NewTask";


export default function Task() {
  return (
    <section>
        <h1 className="text-3xl font-bold test-stone-900 mb-8">Tasks</h1>
        <NewTask />
        <p>No tasks have been added yet</p>
        <ul>

        </ul>
    </section>
  )
}
