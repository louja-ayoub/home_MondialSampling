import { useDispatch } from 'react-redux';
import { Form, Select } from 'antd';
import useLanguage from '../locale/useLanguage';
import { translateAction } from '../redux/translate/actions';
import { countryList } from '../utils/countryList';

const Lang = () => {
    const translate = useLanguage();
    const dispatch = useDispatch();
    return (
        <div>
            <Form.Item
                label={translate('language')}
                name="idurar_app_language"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    showSearch
                    placeholder={translate('select language')}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().startsWith((optionB?.label ?? '').toLowerCase())
                    }
                    onSelect={(value) => {
                        dispatch(translateAction.translate(value));
                    }}
                >

                    {countryList.map((language) => (
                        <Select.Option
                            key={language.value}
                            value={language.value}
                            label={translate(language.label)}
                        >
                            {language?.icon && language?.icon + ' '}
                            {translate(language.label)}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        </div>
    );
}
export default Lang;
