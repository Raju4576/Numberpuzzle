import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const NumPuzzleDemo = () => {
    const [btns, setBtns] = useState([1, 2, 3, 4, 5, 6, 7, "", 8])
    var temp = [...btns]
    const [winner, setwinner] = useState('');
    const win = () => {
        if (temp[0] == 1 && temp[1] == 2 && temp[2] == 3 && temp[3] == 4 && temp[4] == 5 && temp[5] == 6 && temp[6] == 7 && temp[7] == 8 && temp[8] == "") {
            setwinner('YOU ARE WIN')
        }
    }
    useEffect(() => {
        win();
    })
    const resetGame = () => {
        temp[0] = 1
        temp[1] = 2
        temp[2] = 3
        temp[3] = 4
        temp[4] = 5
        temp[5] = 6
        temp[6] = 7
        temp[7] = ""
        temp[8] = 8
        setwinner('')
        setBtns(temp)
    }
    const btnClick = (ind) => {
        if (ind == 7) {
            if (temp[6] == "") {
                temp[6] = temp[7]
                temp[7] = ""
            }
            if (temp[4] == "") {
                temp[4] = temp[7]
                temp[7] = ""
            }
            if (temp[8] == "") {
                temp[8] = temp[7];
                temp[7] = "";
            }
        }

        if (ind == 0) {
            if (temp[1] == "") {
                temp[1] = temp[0];
                temp[0] = ""
            }
            if (temp[3] == "") {
                temp[3] = temp[0];
                temp[0] = ""
            }

        }
        if (ind == 1) {
            if (temp[0] == "") {
                temp[0] = temp[1];
                temp[1] = ""
            }
            if (temp[2] == "") {
                temp[2] = temp[1];
                temp[1] = "";
            }
            if (temp[4] == "") {
                temp[4] = temp[1];
                temp[1] = ""
            }
        }
        if (ind == 2) {
            if (temp[1] == "") {
                temp[1] = temp[2];
                temp[2] = ""
            }
            if (temp[5] == "") {
                temp[5] = temp[2];
                temp[2] = "";
            }

        }
        if (ind == 3) {
            if (temp[0] == "") {
                temp[0] = temp[3];
                temp[3] = ""
            }
            if (temp[4] == "") {
                temp[4] = temp[3];
                temp[3] = "";
            }
            if (temp[6] == "") {
                temp[6] = temp[3];
                temp[3] = ""
            }
        }
        if (ind == 4) {
            if (temp[1] == "") {
                temp[1] = temp[4];
                temp[4] = ""
            }
            if (temp[3] == "") {
                temp[3] = temp[4];
                temp[4] = "";
            }
            if (temp[5] == "") {
                temp[5] = temp[4];
                temp[4] = ""
            }
            if (temp[7] == "") {
                temp[7] = temp[4];
                temp[4] = ""
            }
        }
        if (ind == 5) {
            if (temp[2] == "") {
                temp[2] = temp[5];
                temp[5] = ""
            }
            if (temp[4] == "") {
                temp[4] = temp[5];
                temp[5] = "";
            }
            if (temp[8] == "") {
                temp[8] = temp[5];
                temp[5] = ""
            }

        }
        if (ind == 6) {
            if (temp[3] == "") {
                temp[3] = temp[6];
                temp[6] = ""
            }
            if (temp[7] == "") {
                temp[7] = temp[6];
                temp[6] = "";
            }
        }
        if (ind == 7) {
            if (temp[8] == "") {
                temp[8] = temp[7];
                temp[7] = ""
            }
            if (temp[4] == "") {
                temp[4] = temp[7];
                temp[7] = "";
            }
            if (temp[6] == "") {
                temp[6] = temp[7];
                temp[7] = ""
            }
        }
        if (ind == 8) {
            if (temp[5] == "") {
                temp[5] = temp[8];
                temp[8] = ""
            }
            if (temp[7] == "") {
                temp[7] = temp[8];
                temp[8] = "";
            }
        }
        setBtns(temp)
    }
    return (
        <View style={styles.container}>
            <View style={styles.col}>
                <View style={styles.row}>
                    {
                        btns.map((item, index) => {
                            return (
                                <Pressable style={[styles.btn, winner !== '' && styles.btndisabled]}
                                    onPress={() => btnClick(index)} disabled={winner !== ""} key={index}>
                                    <Text style={styles.txt}>{item}</Text>
                                </Pressable>
                            )
                        })
                    }
                </View>
                <Pressable style={{ width: 80, marginTop: 10, backgroundColor: 'black', padding: 10, borderRadius: 20, justifyContent: 'center' }} onPress={resetGame}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>RESET</Text>
                </Pressable>
                <Text style={{ margin: 10, fontSize: 30, color: 'orange', fontWeight: '900' }}>{winner}</Text>
            </View>
        </View>
    )
}

export default NumPuzzleDemo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'

    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    col: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    btn: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    txt: {
        color: 'white',
        fontSize: 80,
    },
    btndisabled: {
        backgroundColor: 'grey',
    }
})