import React from 'react';

const PrivacyPolicy = () => {
    return (

        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="container mx-auto max-w-5xl">

                {/* Titre principal */}
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Datenschutzerklärung</h1>

                {/* Section d'informations générales */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Allgemeiner Hinweis und Pflichtinformationen</h2>
                    <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <p className="mb-4 bg-white p-4 border-l-4 border-blue-500 shadow-md rounded-md">
                        <strong>Mondial Sampling GmbH</strong><br />
                        Abdessalem HELAL<br />
                        Hambourg, Germany
                    </p>
                    <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>
                </section>

                {/* Section sur le droit de retrait */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
                    <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                </section>

                {/* Section sur le droit de plainte */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h2>
                    <p>
                        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className="text-blue-500 underline hover:text-blue-700">Link</a>.
                    </p>
                </section>

                {/* Section sur le droit de portabilité des données */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recht auf Datenübertragbarkeit</h2>
                    <p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                </section>

                {/* Section sur les droits d'accès et de rectification */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h2>
                    <p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>
                </section>

                {/* Section sur la sécurité SSL/TLS */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">SSL- bzw. TLS-Verschlüsselung</h2>
                    <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>
                </section>

                {/* Section sur les fichiers logs */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Server-Log-Dateien</h2>
                    <p>In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Besuchte Seite auf unserer Domain</li>
                        <li>Datum und Uhrzeit der Serveranfrage</li>
                        <li>Browsertyp und Browserversion</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>IP-Adresse</li>
                    </ul>
                    <p>Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
                </section>

                {/* Section sur le formulaire de contact */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Kontaktformular</h2>
                    <p>Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.</p>
                    <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
                    <p>Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.</p>
                </section>

                {/* Section sur les cookies */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cookies</h2>
                    <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
                    <p>Einige Cookies sind „Session-Cookies.“ Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.</p>
                    <p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p>
                    <p>Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.</p>
                </section>

                {/* Section sur les Google Fonts */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Google Web Fonts</h2>
                    <p>Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                    <p>Durch den Einsatz dieser Web Fonts wird es möglich, Ihnen die von uns gewünschte Darstellung unserer Website zu präsentieren, unabhängig davon, welche Schriften Ihnen lokal zur Verfügung stehen. Dies erfolgt über den Abruf der Google Web Fonts von einem Server von Google in den USA und der damit verbundenen Weitergabe Ihrer Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht haben.</p>
                    <p>Das Unternehmen Google ist für das us-europäische Datenschutzübereinkommen „Privacy Shield“ zertifiziert. Dieses Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleisten.</p>
                    <p>Einzelheiten über Google Web Fonts finden Sie unter: <a href="https://www.google.com/fonts#AboutPlace:about" className="text-blue-500 underline hover:text-blue-700">Link</a> und weitere Informationen in den Datenschutzbestimmungen von Google: <a href="https://policies.google.com/privacy/partners?hl=de" className="text-blue-500 underline hover:text-blue-700">Link</a></p>
                </section>
            </div>

        </div>
    );
};

export default PrivacyPolicy;