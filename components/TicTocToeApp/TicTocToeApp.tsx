import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // 1. Logic to calculate the winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],           // Diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  // 2. Handle Tap
  const handlePress = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  // 3. Helper to render squares
  const Square = ({ index }) => (
    <TouchableOpacity 
      style={styles.square} 
      onPress={() => handlePress(index)}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.squareText, 
        { color: board[index] === 'X' ? '#3B82F6' : '#EF4444' }
      ]}>
        {board[index]}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>
            {winner 
              ? `Winner: ${winner}` 
              : isDraw 
              ? "It's a Draw!" 
              : `Next Turn: ${xIsNext ? 'X' : 'O'}`}
          </Text>
        </View>
      </View>

      <View style={styles.board}>
        <View style={styles.row}>
          <Square index={0} /><Square index={1} /><Square index={2} />
        </View>
        <View style={styles.row}>
          <Square index={3} /><Square index={4} /><Square index={5} />
        </View>
        <View style={styles.row}>
          <Square index={6} /><Square index={7} /><Square index={8} />
        </View>
      </View>

      <TouchableOpacity 
        style={styles.resetButton} 
        onPress={() => {
          setBoard(Array(9).fill(null));
          setXIsNext(true);
        }}
      >
        <Text style={styles.resetText}>Restart Game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1E293B',
    marginBottom: 10,
  },
  statusContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  status: {
    fontSize: 20,
    fontWeight: '600',
    color: '#475569',
  },
  board: {
    backgroundColor: '#CBD5E1',
    padding: 5,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 90,
    height: 90,
    backgroundColor: '#FFF',
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 50,
    backgroundColor: '#1E293B',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  resetText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});