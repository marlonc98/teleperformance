import React, { useContext } from 'react';
import { translate, tDictionary } from '../translate/translate';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { validatorMinLength, validatorOnlyNumbers, validatorRequired } from '../utils/Utils';
import {routes} from '../routes/Routes';
import { ModalContext } from '../context/ModalContext';
import PageService from '../services/PageService';
import { useHistory } from 'react-router';

const CheckNit = () => {
    const {modal, setModal} = useContext(ModalContext);
    const history = useHistory();
    const _submitCheckNit = (_, values) => { 

        PageService.getCompany(values.nit).then(response=>{
        history.push({pathname: routes.companyDetail.path, state: {
            nit: values.nit,
            data: null,
        }});
    }).catch(err=>{
            setModal({
                title: translate(tDictionary.key_authorization_type_not_register),
                content: err.reason,
            })
        })

    }
    return <div className="container py-5" >
        <div className="card">
            <div className="card-header">
                <h4>{translate(tDictionary.check_nit_inscription_title)}</h4>

            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <p>{translate(tDictionary.check_nit_inscription_description)}</p>
                        <AvForm className="row" onValidSubmit={_submitCheckNit}>
                            <div className="col-12 col-md-6 form-group">
                                <AvField type="text"
                                    validate={{
                                        ...validatorRequired,
                                        ...validatorOnlyNumbers,
                                        ...validatorMinLength(6)
                                    }}
                                    className="form-control" name="nit" placeholder={translate(tDictionary.check_nit_inscription_input)} />
                            </div>
                            <div className="col-12 mt-3">
                                <button type="reset" className="btn btn-light">
                                    {translate(tDictionary.cancel)}
                                </button>
                                <button type="submit" className="btn btn-danger">
                                    {translate(tDictionary.continue)}
                                </button>

                            </div>
                        </AvForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CheckNit;