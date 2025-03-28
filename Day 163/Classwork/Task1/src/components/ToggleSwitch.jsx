import useToggle from "./hooks/useToggle";

const ToggleSwitch = () => {
    const [isToggled, toggle] = useToggle(false);

    return (
        <div>
            <button onClick={toggle}>
                {isToggled ? "Turn Off" : "Turn On"}
            </button>
            {isToggled && <p>Switch is On</p>}
        </div>
    );
};

export default ToggleSwitch;
