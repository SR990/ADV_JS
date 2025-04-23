import ArticlePreview from "./ArticlePreview";
import harper from "./assets/Harper.jpeg"
import george from "./assets/george.jpeg"
import jk from "./assets/JK.jpg"

function Articlelist() {
  return (
    <>
      <ArticlePreview 
        author="Harper Lee" 
        title="To Kill a Mockingbird"
        preview="In a small town in the American South, a young girl named Scout learns about racism and justice as her father, a lawyer, defends a Black man wrongly accused of a crime. The story shows childhood innocence, prejudice, and moral courage."
        img={harper}
      />

      <ArticlePreview 
        author="George Orwell" 
        title="1984"
        preview="In a future world ruled by a totalitarian government, a man named Winston tries to rebel against the system that watches and controls everything. It's a powerful warning about surveillance, freedom, and truth."
        img={george}      
      />


      <ArticlePreview 
        author="J.K. Rowling" 
        title="Harry Potter and the Sorcerer’s Stone"
        preview="An orphan boy named Harry learns he is a wizard and joins a magical school called Hogwarts. There, he makes friends, discovers his past, and faces a dark enemy. It’s a magical tale of friendship, bravery, and adventure."
        img={jk}
      />
    </>
  );
}

export default Articlelist;
