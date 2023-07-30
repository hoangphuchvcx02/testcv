library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

--

entity half_sec is

	port(S:     in  std_logic;
	     PULSE: in  std_logic;
	     T:     out std_logic);

end half_sec;

--

architecture osc of half_sec is

constant freq: natural := 25000000;

signal count: natural range 0 to freq;
signal tog: std_logic := '0';

--

begin

	process(S, PULSE)
	begin

		if (S = '1') then

			if (rising_edge(PULSE)) then

				if (count = freq) then

					tog   <= not tog;
					count <= 0;

				else

					count <= count + 1;

				end if;

			end if;

		end if;
		
		if (S = '0') then

			tog   <= '0';
			count <= 0;
			
		end if;

	end process;

	T <= tog;

end osc;