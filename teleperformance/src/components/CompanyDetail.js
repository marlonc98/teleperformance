import React, { useContext, useEffect, useState } from 'react';
import { translate, tDictionary } from '../translate/translate';
import { AvForm, AvField, AvCheckbox, AvCheckboxGroup } from 'availity-reactstrap-validation';
import { validatorEmail, validatorMinLength, validatorOnlyNumbers, validatorRequired } from '../utils/Utils';
import { routes } from '../routes/Routes';
import { ModalContext } from '../context/ModalContext';
import PageService from '../services/PageService';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

const CompanyDetail = () => {
    const { modal, setModal } = useContext(ModalContext);
    const [typesId, setTypesId] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const location = useLocation();
    const { state } = location;
    const history = useHistory();
    const _submitCompanyDetail = (_, values) => {
        PageService.putCompany({nit: state.nit, put: state.data != null, ...values}).then(respone => {
            history.push(routes.companyDetail, {
                nit: values.nit,
                data: respone,
            });
        }).catch(err => {
            setModal({
                title: translate(tDictionary.key_authorization_type_not_register),
                content: err.reason,
            })
        })

    }

    return <div className="container py-5" >
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                            <AvForm className="row" onValidSubmit={_submitCompanyDetail} model={state != null ? state.data : null}>
                            <div className="col-12 col-md-6 form-group mb-3">
                                <AvField type="select"
                                    onChange={e => setSelectedId(e.target.value)}
                                    label={translate(tDictionary.company_identification_type_id)}
                                    validate={{
                                        ...validatorRequired,
                                    }}
                                    className="form-control" name="identification_type_id" placeholder={translate(tDictionary.company_identification_type_id)} >
                                    {typesId.map((type) => <option value={type.id} key={type.id}>{translate(type.name)}</option>)}
                                </AvField>
                            </div>
                            <div className="col-12 col-md-6 form-group mb-3">
                                <AvField type="text"
                                    validate={{
                                        ...validatorRequired,
                                        ...validatorOnlyNumbers,
                                        ...validatorMinLength(6)
                                    }}
                                    label={translate(tDictionary.company_identification_number)}
                                    className="form-control" name="identification_number" placeholder={translate(tDictionary.company_identification_number)} />
                            </div>
                            {selectedId == 1 || selectedId == 2 ? <div className="col-12 col-md-6 form-group mb-3">
                                <AvField type="text"
                                    validate={{
                                        ...validatorRequired,
                                        ...validatorMinLength(6)
                                    }}
                                    label={translate(tDictionary.company_name)}
                                    className="form-control" name="company_name" placeholder={translate(tDictionary.company_company_name)} />
                            </div> : ''}
                            {selectedId != 1 && selectedId != 2 ? <div className="col-12 col-md-6 form-group mb-3">
                                <AvField type="text"
                                    validate={{
                                        ...validatorRequired,
                                        ...validatorMinLength(6)
                                    }}
                                    label={translate(tDictionary.company_first_name)}
                                    className="form-control" name="first_name" placeholder={translate(tDictionary.company_first_name)} />
                            </div> : ''}
                            {selectedId != 1 && selectedId != 2 ? <div className="col-12 col-md-6 form-group mb-3">
                                <AvField type="text"
                                    validate={{
                                        ...validatorMinLength(6)
                                    }}
                                    label={translate(tDictionary.company_second_name)}
                                    className="form-control" name="second_name" placeholder={translate(tDictionary.company_second_name)} />
                            </div> : ''}
                            {selectedId != 1 && selectedId != 2 ? <div className="col-12 col-md-6 form-group mb-3">
                                <AvField type="text"
                                    validate={{
                                        ...validatorRequired,
                                        ...validatorMinLength(6)
                                    }}
                                    label={translate(tDictionary.company_first_last_name)}
                                    className="form-control" name="first_last_name" placeholder={translate(tDictionary.company_first_last_name)} />
                            </div> : ''}
                            {selectedId != 1 && selectedId != 2 ? <div className="col-12 col-md-6 form-group mb-3">
                                <AvField type="text"
                                    validate={{
                                        ...validatorMinLength(6)
                                    }}
                                    label={translate(tDictionary.company_second_last_name)}
                                    className="form-control" name="second_last_name" placeholder={translate(tDictionary.company_second_last_name)} />
                            </div> : ''}
                            <div className="col-12 col-md-6 form-group mb-3">
                                <AvField type="email"
                                    validate={{
                                        ...validatorRequired,
                                        ...validatorEmail,
                                        ...validatorMinLength(6)
                                    }}
                                    label={translate(tDictionary.company_email)}
                                    className="form-control" name="email" placeholder={translate(tDictionary.company_email)} />
                            </div>
                            <div className="col-12 form-group mb-3">
                                <AvCheckboxGroup name="message_phone_authorization">
                                    <AvCheckbox label={translate(tDictionary.company_message_phone_authorization)} value="1" />
                                </AvCheckboxGroup>
                            </div>
                            <div className="col-12 form-group mb-3">
                                <AvCheckboxGroup  name="message_email_authorization">
                                    <AvCheckbox label={translate(tDictionary.company_message_email_authorization)} value="1" />
                                </AvCheckboxGroup>
                            </div>
                            <div className="col-12 ">
                                <button onClick={() => history.goBack()} className="btn btn-light">
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

export default CompanyDetail;