import * as React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ChangeDescAction, ChangeEmailAction, ChangeNameAction } from 'src/actions/contactusAction';
import { getDesc, getEmail, getName } from 'src/reducers/ContacUsReducer';
import { IContacUsState } from 'src/Store/AllStates';
import { IAppState } from 'src/Store/store';

interface IContacUsProps {
    Name: string,
    Email: string,
    Desc: string,
    ChangeName: (name: string) => void;
    ChangeEmail: (email: string) => void;
    ChangeDesc: (desc: string) => void;
}

class ContactUs extends React.Component<IContacUsProps, IContacUsState> {

    constructor(props: IContacUsProps) {
        super(props);

        this.Send = this.Send.bind(this);
        this.blurHandlingForEmail = this.blurHandlingForEmail.bind(this);
        this.blurHandlingForName = this.blurHandlingForName.bind(this);
        this.changeHanhleing = this.changeHanhleing.bind(this);
        this.blurHandlingForDesc = this.blurHandlingForDesc.bind(this);
    }

    // tslint:disable-next-line: no-empty
    public changeHanhleing(event: React.ChangeEvent<HTMLInputElement>) {

    }
    public blurHandlingForName(event: React.FocusEvent<HTMLInputElement>) {
        this.props.ChangeName(event.target.value);
    }

    public blurHandlingForEmail(event: React.FocusEvent<HTMLInputElement>) {
        this.props.ChangeEmail(event.target.value);
    }

    public blurHandlingForDesc(event: React.FocusEvent<HTMLTextAreaElement>) {
        this.props.ChangeDesc(event.target.value);
    }

    public Send() {
        alert("Thanks " +this.props.Name);
    }

    public render() {
        document.title = "Countact us";

        return (<div className="contact-us-form" ><div className="desc-top">Please send to us, your opinins and suggestions. </div>
            <div className="form-group">
                <label>Name

                <input className="form-control" onChange={this.changeHanhleing}
                        onBlur={this.blurHandlingForName} type="text" placeholder="please enter your name." />
                </label>
            </div>
            <div className="form-group">
                <label>Email
                <input className="form-control" type="email" onBlur={this.blurHandlingForEmail}
                        onChange={this.changeHanhleing} placeholder="please enter your Email." />

                </label>
            </div>
            <div className="form-group">
                <label>Description
                <textarea className="form-control" rows={5} onBlur={this.blurHandlingForDesc}
                        placeholder="please enter your description." />

                </label>
            </div>
            <div className="form-group">
                <input type="button" id="sendBtn" value="Send" onClick={this.Send} />   </div>
        </div>)
    }
}
const mapStateToProps = (state: IAppState) => {
    return {
        Desc: getDesc(state.contactusState),
        Email: getEmail(state.contactusState),
        Name: getName(state.contactusState),
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    ChangeDesc: ChangeDescAction,
    ChangeEmail: ChangeEmailAction,
    ChangeName: ChangeNameAction,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);