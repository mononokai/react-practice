import { Avatar } from "./Avatar";
import { Intro } from "./Intro";
import { SkillList } from "./SkillList";

const App = () => {
    return (
        <div className="card">
            <Avatar pic="selfie.png" />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
                for each web dev skill that you have,
                customized with props */}
                <SkillList />
            </div>
        </div>
    );
};

export default App;