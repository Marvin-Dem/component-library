type FlashcardProps = {
    title: string;
    content: string;
};

export default function Flashcard(props: FlashcardProps) {
    return (
        <div>
            <p>{props.title}</p>
            <div>Progress Bar</div>
            <p>{props.content}</p>
            <div>Footer</div>
        </div>
    );
}
