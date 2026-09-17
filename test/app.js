fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });

  data.map((comment) =>
    <div>
        <h2>{comment.name}</h2>
    </div>
)