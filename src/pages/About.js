import '../css/index.css';
import '../css/About.css';
import ProfileImg from '../assets/om-mig-bild.jpg';
import HobbyImg from '../assets/golf-image.jpg';
import OfficeImg from '../assets/office-image.jpg'
import Image from 'react-bootstrap/Image';  
import { Link } from 'react-router-dom';
export default function About(){
    return(
        <main>
            <section className='container text-light d-flex flex-row flex-wrap justify-content-center gap-5 first-content'>
                <aside className="aside-image-container">
                        <Image src={ProfileImg} className='profile-img' alt="Profile image" />
                </aside>
                <div className='text-content'>
                    <h1 className='display-3 pt-5 pb-4'>Om mig</h1>
                    <p>Mitt namn är Carl Fransson och jag är 25 år gammal. Just nu går jag mitt första
                        år på Edugrade där jag studerar för att bli Systemutvecklare. Som person beskriver jag mig själv
                        som nyfiken, strukturerad och med en hög arbetsmoral. Jag har en stark inre drivkraft och en
                        förmåga att snabbt lära mig nya system och program.</p>
                    <p>
                        Utanför mina studier ägnar jag mycket tid åt att fördjupa mina kunskaper inom både front-end och
                        back-end. Jag är engagerad i att utveckla min kompetens inom design och funktionalitet genom att
                        arbeta med olika hemsidor. Detta inkluderar både skapandet av användarvänliga gränssnitt och
                        att förstå de tekniska aspekterna bakom systemen.</p>

                    <p>Jag ser fram emot att fortsätta utforska och utveckla min kompetens inom systemutveckling och
                        kombinera min passion för både design och funktionalitet.</p>
                    <div className="about-btn-container d-flex flex-row gap-3 btn-container">
                        <Link to="/Cv">
                                <button className='btn-light text-light'>Läs mitt CV</button>
                        </Link>
                        <Link to="/Contact">
                                <button className='btn-light text-light'>Kontakta mig</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='container text-light d-flex flex-row-reverse flex-wrap justify-content-center gap-5 first-content'>
                <aside className="aside-image-container">
                        <Image src={HobbyImg} className='profile-img' alt="Golf image" />
                </aside>
                <div className='text-content'>
                    <h1 className='display-3 pt-5 pb-4'>Mina intressen</h1>
                    <p>Jag är en aktiv person som verkligen uppskattar att hålla mig i form genom träning och att njuta
                        av olika fritidsaktiviteter. Att fiska och utforska olika hobbyer är något jag regelbundet ägnar
                        mig åt. En av mina stora passioner är golf, en sport som jag kastade mig in i för ungefär tre år
                        sedan och har varit fast i sedan dag ett. Golf har blivit en viktig del av min fritid, och jag
                        ser alltid fram emot att tillbringa tid på banan och utmana mig själv för att förbättra mitt
                        spel.

                    </p>
                    </div>
            </section>
            <section className='container text-light d-flex flex-row flex-wrap justify-content-center gap-5 first-content'>
                <aside className="aside-image-container">
                        <Image src={OfficeImg} className='profile-img' alt="Office image" />
                </aside>
                <div className='text-content'>
                    <h1 className='display-3'>Mina kunskaper inom systemutveckling</h1>
                    <h4>.NET & C#</h4>
                    <p>Under min utbildning har jag vidgat mina kunskaper inom .NET i Visual Studio, särskilt med
                        programmeringsspråket C#. Mina färdigheter inom C# och .NET är mångsidiga och omfattar olika
                        aspekter av objektorienterad programmering.
                    </p>
                    <h4>SQL & SSMS</h4>
                    <p>Vi har även utforskat arbete med databaser i
                        Microsoft SQL Server och lärt oss använda EF och ADO.NET för att integrera och anropa databaser.
                        Vi skapade ER-diagram och utforskade avancerade koncept som triggers, stored procedures och
                        transaktioner. Min kunskap inom databaser är grundläggande, och jag kan skapa, förstå och
                        hantera olika typer av relationella databaser.
                    </p>
                    <h4>HTML, CSS & JS</h4>
                    <p>På front-end-sidan har vi arbetat mycket med HTML, CSS och Javascript. Inom JavaScript har vi
                        även lärt oss ramverk som React för att skapa mer funktionella hemsidor.
                        Inom CSS har vi även lärt mig att använda Bootstrap. När vi har skapat olika sidor har vi
                        användt oss
                        utav Visual Studio Code. Mina kunskaper inom front-end är breda och jag känner mig trygg med
                        att skapa olika designs och implementera olika funktioner. Sammantaget har jag byggt upp en
                        omfattande kompetensprofil inom både back-end och front-end utveckling under min utbildning.
                    </p>
                    <Link to="/Portfolio">
                                <button className='btn-light text-light'>Se mina projekt</button>
                    </Link>
                    </div>
            </section>
        </main>
    );
    
    }