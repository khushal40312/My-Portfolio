const Target = (props) => (
  <mesh {...props} scale={1.5}>
    <boxGeometry args={[1,1,1]} />
    <meshStandardMaterial color="orange" />
  </mesh>
);
