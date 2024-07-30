import QuesAns from "./quesAns";

export default function FreqQuestion(){
    return <main className=" pt-16  flex justify-start items-center flex-col">
        <h6 className="sm:text-3xl text-center text-2xl font-semibold">Frequently asked questions</h6>
        <p className="mt-2 text-base text-center sm:text-lg font-medium text-gray-800">Haven&apos;t got your answer<span className="text-gray-500">?</span><span className="text-gray-500 underline">Contact our support now!</span> </p>
        <QuesAns/>

    </main>
}