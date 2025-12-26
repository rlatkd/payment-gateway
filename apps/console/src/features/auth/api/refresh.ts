export const refreshSession = async () => {
  try {
    const response = await fetch('http://localhost:8080/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', 
    });

    if (!response.ok) {
      throw new Error('세션 연장에 실패했습니다.');
    }

    return { success: true };
  } catch (error) {
    console.error('Refresh API Error:', error);
    return { success: false };
  }
};
