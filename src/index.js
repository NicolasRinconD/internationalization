import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';


import JobsList from "./components/jobsList";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

let language = navigator.languages[0];

ReactDOM.render(
	<IntlProvider locale={language} messages= {language === "es-ES"? localeEsMessages : localeEnMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);
