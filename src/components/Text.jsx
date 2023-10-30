import React from 'react'

const TextInfo = [
    {
        title: "웹표준 사이트 만들기",
        desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는"
    },
    {
        title: "반응형 사이트 만들기",
        desc: "웹표준 사이트를 완성하고, 반응형을 익히는 사이트입니다. 기본 코딩을 익히고, 반응형 감각을 키우면 모바일 및 반응형 사이트도 만들 수 있습니다. 웹표준 사이트를....."
    },
    {
        title: "패랠렉스 사이트 만들기",
        desc: "기업 사이트 중 50% 이상이 패랙렉스 스크로링 효과로 만들어져 있습니다. 웹 표준, 반응형 사이트를 완성하였다면, 이제는 인터랙티브한 패랠렉스 스크롤링 사이트를....."
    },
    {
        title: "웹표준 사이트 만들기",
        desc: "사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는"
    },
    {
        title: "반응형 사이트 만들기",
        desc: "웹표준 사이트를 완성하고, 반응형을 익히는 사이트입니다. 기본 코딩을 익히고, 반응형 감각을 키우면 모바일 및 반응형 사이트도 만들 수 있습니다. 웹표준 사이트를....."
    },
    {
        title: "패랠렉스 사이트 만들기",
        desc: "기업 사이트 중 50% 이상이 패랙렉스 스크로링 효과로 만들어져 있습니다. 웹 표준, 반응형 사이트를 완성하였다면, 이제는 인터랙티브한 패랠렉스 스크롤링 사이트를....."
    }
];

const Text = (props) => {
    return (
        <section id="textType" className={`text__wrap ${props.element}`}>
            <span>{props.title}</span>
            <h2 className="mb70">스크립트를 익히는 방법</h2>
            <div className="text__inner container">
                {TextInfo.map((t, key) => (
                    <div className={`text t${key+1}`} key={key}>
                        <h3 className="text__title">{t.title}</h3>
                        <p className="text__desc">{t.desc}</p>
                        <a className="text__btn" href="/">더보기</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Text
