import { Form, Select } from "antd";
import useLanguage from '../locale/useLanguage';
import { translateAction } from '../redux/translate/actions';
import { useDispatch, useSelector } from "react-redux";
import languages from '../utils/languages';
import { selectLangCode } from "../redux/translate/selectors";

const Lang = () => {
    const translate = useLanguage();
    const dispatch = useDispatch();
    const langCode = useSelector(selectLangCode)

    return (<Select
        showSearch
        className="min-w-32 w-full"
        placeholder={translate('select_language')}
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

        value={langCode}
    >
        {languages.map((language) => (
            <Select.Option key={language.value} value={language.value} label={language.label}>
                <div className="flex gap-1 font-semibold">
                    <span role="img" aria-label={language.label}>
                        {language.icon}
                    </span>
                    {translate(language.label.toLowerCase())}
                </div>
            </Select.Option>
        ))}
    </Select>)
}

export default Lang;