import { StatusBar } from 'expo-status-bar';
import { Text, View ,Button} from 'react-native';
import styles from './styles';  
import React, {useState} from 'react';

export default function App() {
  
  const [number , setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25 , color:'orange'}}>결과: {number}번 클릭하였다</Text>
      <StatusBar style="auto" />
      <View style={{flexDirection:"row" , gap: 10, marginTop:10}}>
        <Button title='증가'  onPress={()=>setNumber(number+1)}/>
        <Button title='초기화' onPress={()=>setNumber(0)} />
        <Button title='감소' onPress={()=>setNumber(number-1)} />
        
      </View>

     <Text style={styles.Text}>테스트 1</Text>
     <Text style={{...styles.Tex , color: 'green'}}>테스트 2</Text>
     <Text style={{...styles.Tex , color: 'red'}}>테스트 3</Text>
    </View>
  );
}



/* APP 이라는 함수형 컴포넌트를 정의  */
// View 는 웹의 <div> 같은 역활을 하는 컨테이너 컴포넌트 이다
// <Text>는 문자열을 표시하는 컴포넌트 
// <StatusBar style="auto" /> 는 휴대폰 상단의 상태 표시줄의 스타일을 조절하는 역활을 합니다 
// 자동으로 밝은/ 어두운 테마에 맞춰서 상태 표시줄 색상을 바꿔 줍니다 
// style={styles.container}는
// styles라는 객체 안에 있는 container라는 키(key)에 해당하는 스타일을 적용한다는 뜻
// styles는 자바스크립트 객체이다
// StyleSheet.create()는 그 객체를 React Native가 효율적으로 관리할 수 있게 만들어주는 함수.
// <Button title='초기화' onPress={()=>setNumber(number=0)} /> 를 쓰면 안되는 이유
// React 상태를 잘못 업데이트 했기 떄문이다
// number = 0 이라는 변수 대입이 실행된다면 결과는 setNumber(0)과 비슷하게 동작하긴 하지만 사실상 state 가 아닌 일반 변수 대입으로 처리돼서
// React가 제대로 rerender(화면갱신)을 못하게 되닌 이점 알아두자
// React -> 웹 전용 (하이브리드 웹앱)
// React Native APP 전용
// View , Text , Button  ReactNative 전용 컴포넌트가 따로 있다
